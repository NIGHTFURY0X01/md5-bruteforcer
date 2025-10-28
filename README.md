>> MD5 Bruteforcer for Base64 Strings

### A Node.js script to recover original messages from broken base64 strings by bruteforcing MD5 checksums.
--- 
## Description
+ This tool helps you find the original content when you have:
+ A base64 string with unknown characters (represented as '?')
+ The MD5 hash of the original base64 string

- It systematically tries all possible characters to replace the '?' symbols until it finds a match with the target MD5 checksum.

## Installation
No installation required. Just ensure you have Node.js installed on your system.

## Usage
```bash
node bruteforcer.js <broken-base64-string> <target-md5-hash>
```
--- 

### Example:

```bash
node bruteforcer.js "V?VzdA==" "1bee2ffa5d703046bac8e0dc07ce7722"
```
```bash
Test
```
Or

```bash
 node md5-bruteforcer.js "QnJhdm8hIE5leHQ?bGV2ZWw6IC9Z?01q?TNP?1pt" 28f09edf0014c017f06f799e7bda9f79
```
```bash
Bravo! Next level: /Y3MjE3OWZm
```

+ The script will try all characters from the charset to replace the '?' and find the matching MD5 checksum.

## Use Cases:
+ CTF (Capture The Flag) challenges

+ Recovering corrupted data with known checksums

+ Educational purposes for understanding bruteforce attacks

+ Digital forensics exercises

### How It Works:
+ Takes a base64 string with '?' placeholders and a target MD5 hash

+ Recursively generates all possible combinations by replacing '?' with charset characters

+ Computes MD5 hash for each candidate

+ Stops when a match is found and decodes the base64 message







