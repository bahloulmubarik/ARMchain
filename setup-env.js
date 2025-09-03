import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envContent = `NODE_ENV=development
BASE_URL=http://localhost:3000
BASE_URL_OTHER_PORT=http://localhost:3001
ADMIN_PASSWORD=admin123
OPENROUTER_API_KEY=your_openrouter_api_key_here
`;

const envPath = path.join(__dirname, '.env');

if (!fs.existsSync(envPath)) {
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file with default values');
  console.log('📝 Please update OPENROUTER_API_KEY with your actual API key if needed');
} else {
  console.log('✅ .env file already exists');
}

console.log('\n🚀 Your ARMChain app should now be running at: http://localhost:3000');
console.log('📖 If you see a white screen, try refreshing the page');
console.log('🔧 Check the browser console for any errors');
