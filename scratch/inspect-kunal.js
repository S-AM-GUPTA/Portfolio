const fs = require('fs');
const css = fs.readFileSync('C:/Users/samfg/.gemini/antigravity/brain/5f519706-7725-4569-9eb5-849373d864e2/.system_generated/steps/2338/content.md', 'utf8');

// Find all keyframes
const keyframes = css.match(/@keyframes\s+[^\{]+\{[^\}]+\}/g);
console.log('Keyframes:\n', keyframes ? keyframes.join('\n') : 'none');

// Find background gradients or patterns
const backgrounds = css.match(/background[^;\}]+|radial-gradient[^;\}]+|linear-gradient[^;\}]+/g);
console.log('Background styles sample:\n', backgrounds ? Array.from(new Set(backgrounds)).slice(0, 20).join('\n') : 'none');
