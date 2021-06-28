# Caesar-Cipher 
Install all dependeces: 
```bash
npm install
``` 
Then run: 
```bash
node my_caesar_cli <arguments>
``` 
CLI tool accept 4 options (short alias and full name):

1. -a, --action: an action encode/decode
2. -s, --shift: a shift
3. -i, --input: an input file
4. -o, --output: an output file 
----
Action (encode/decode) and the shift are required. 

Usage example:
1. -a (--action) is encode
```bash
node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
``` 
```bash
node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
```bash
node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```
```bash
node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```
