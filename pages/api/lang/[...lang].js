// pages/api/lang/[...lang].js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { lang } = req.query;
  const langFile = Array.isArray(lang) ? lang[0] : lang;
  
  if (!langFile || !langFile.endsWith('.json')) {
    return res.status(404).json({ error: 'Language file not found' });
  }

  try {
    const filePath = path.join(process.cwd(), 'lang', langFile);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const translations = JSON.parse(fileContent);
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(translations);
  } catch (error) {
    console.error('Error loading language file:', error);
    res.status(404).json({ error: 'Language file not found' });
  }
}
