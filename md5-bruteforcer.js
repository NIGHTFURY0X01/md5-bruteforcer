const crypto = require('crypto'); // Added missing crypto import
const [broken, target] = process.argv.slice(2); // Added missing equals sign

 if (!broken || !target) { // Fixed condition (added ! before target)
   console.error('Usage: node bruteforcer.js <broken-message> <target-checksum>');
   process.exit(1);
 }

 try {
    // Candidate characters to try for
   const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@123456789+/={}[]()";

    // Recursive generator to replace one by one
   function* expand(str, i = 0) { // Added * to make it a generator function
     const idx = str.indexOf('?', i); // Added missing equals sign
     if (idx === -1) { // Fixed comparison (should be === -1)
       yield str;
       return;
     }

      for (const ch of charset) {
       // Fixed string concatenation and recursive call
       yield* expand(str.slice(0, idx) + ch + str.slice(idx + 1), idx + 1);
     }
   }

   // Try all candidates
   for (const candidate of expand(broken)) {
     const md5 = crypto.createHash('md5').update(candidate).digest('hex');
     if (md5 === target) { // Fixed comparison (added ===)
       const decoded = Buffer.from(candidate, 'base64').toString('utf8');
         console.log(decoded);
       break;
     }
   }
 } catch (err) {
   console.error('Bruteforce failed:', err.message);
   process.exit(2);
 }