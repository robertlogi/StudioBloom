#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const projectRoot = path.join(__dirname, '..')

function scanDirectory(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const results = []
  
  function scan(currentPath) {
    const items = fs.readdirSync(currentPath)
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        if (!item.startsWith('.') && item !== 'node_modules' && item !== '.next') {
          scan(fullPath)
        }
      } else if (extensions.includes(path.extname(item))) {
        results.push(fullPath)
      }
    }
  }
  
  scan(dir)
  return results
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  
  const images = []
  let lineNumber = 1
  
  for (const line of lines) {
    const trimmedLine = line.trim()
    
    if (trimmedLine.includes('<Image') || trimmedLine.includes('<img')) {
      const hasAlt = trimmedLine.includes('alt=') || trimmedLine.includes('alt =')
      const altEmpty = trimmedLine.includes('alt=""') || trimmedLine.includes('alt=\'\'')
      const altUndefined = trimmedLine.includes('alt={undefined}') || trimmedLine.includes('alt={""}')
      
      images.push({
        line: lineNumber,
        hasAlt,
        altEmpty: altEmpty || altUndefined,
        content: trimmedLine,
        file: path.relative(projectRoot, filePath)
      })
    }
    
    lineNumber++
  }
  
  return images
}

function generateReport() {
  console.log('🔍 Scanning for images...\n')
  
  const files = scanDirectory(projectRoot)
  const allImages = []
  
  for (const file of files) {
    const images = analyzeFile(file)
    allImages.push(...images.map(img => ({ ...img, file: path.relative(projectRoot, file) })))
  }
  
  const totalImages = allImages.length
  const imagesWithAlt = allImages.filter(img => img.hasAlt && !img.altEmpty).length
  const imagesWithoutAlt = allImages.filter(img => !img.hasAlt).length
  const imagesWithEmptyAlt = allImages.filter(img => img.altEmpty).length
  
  const altCoverage = totalImages > 0 ? Math.round((imagesWithAlt / totalImages) * 100) : 100
  
  console.log('📊 Alt Text Audit Report')
  console.log('========================\n')
  
  console.log(`Total images found: ${totalImages}`)
  console.log(`Images with proper alt text: ${imagesWithAlt}`)
  console.log(`Images without alt text: ${imagesWithoutAlt}`)
  console.log(`Images with empty alt text: ${imagesWithEmptyAlt}`)
  console.log(`Alt text coverage: ${altCoverage}%\n`)
  
  if (imagesWithoutAlt > 0) {
    console.log('❌ Images missing alt text:')
    allImages.filter(img => !img.hasAlt).forEach(img => {
      console.log(`  - ${img.file}:${img.line}`)
    })
    console.log()
  }
  
  if (imagesWithEmptyAlt > 0) {
    console.log('⚠️  Images with empty alt text:')
    allImages.filter(img => img.altEmpty).forEach(img => {
      console.log(`  - ${img.file}:${img.line}`)
    })
    console.log()
  }
  
  if (altCoverage === 100) {
    console.log('✅ Perfect alt text coverage!')
  } else if (altCoverage >= 90) {
    console.log('✅ Good alt text coverage')
  } else if (altCoverage >= 70) {
    console.log('⚠️  Moderate alt text coverage - needs improvement')
  } else {
    console.log('❌ Poor alt text coverage - requires immediate attention')
  }
  
  return {
    totalImages,
    imagesWithAlt,
    imagesWithoutAlt,
    imagesWithEmptyAlt,
    altCoverage,
    details: allImages
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  generateReport()
}

export { generateReport } 