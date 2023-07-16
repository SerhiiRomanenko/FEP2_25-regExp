//-----------------TASK-1---------------------//
// Check if a string contains the word word in it (case insensitive). If you have no idea, I guess you could try /word/.

const str1 = "/word/";
const regex1 = new RegExp(/\bword\b/gim);

console.log(regex1.test(str1));

//-----------------TASK-2---------------------//
/*

Use substitution to replace every occurrence of the word i with the word I (uppercase, I as in me).
E.g.: i'm replacing it. am i not? -> I'm replacing it. am I not?.
A regex match is replaced with the text in the Substitution field when using substitution.

*/

let str2 = "i'm replacing it. am i not?";
const regex2 = new RegExp("\\bi\\b", "g");
console.log(str2.replace(regex2, "I"));

//-----------------TASK-3---------------------//
/*

With regex you can count the number of matches. Can you make it return the number of uppercase
consonants (B,C,D,F,..,X,Y,Z) in a given string? E.g.: it should return 3 with the text ABcDeFO!.
Note: Only ASCII. We consider Y to be a consonant!
Example: the regex /./g will return 3 when run against the string abc.

*/

const str3 = "ABcDeFO!";
const regex3 = new RegExp("/B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z|Y", "g");
console.log(str3.search(regex3));

//-----------------TASK-4---------------------//
/*

Count the number of integers in a given string. Integers are, for example: 1, 2, 65, 2579, etc.

*/

const str4 = "1, 2, 65, 2579, hello";
const regex4 = /\b\d+\b/g;
console.log(str4.match(regex4).length);

//-----------------TASK-5---------------------//
/*

Strip all HTML tags from a string. HTML tags are enclosed in < and >.
The regex will be applied on a line-by-line basis, meaning partial tags will need to be handled by the regex.
Don't worry about opening or closing tags; we just want to get rid of them all.
Note: This task is meant to be a learning exercise, and not necessarily the best way to parse HTML.
 */

const str5 = `
    <
    div>
        <p><span>Hello</span>
            <ul>
                <li>JS</li>
            </ul>
        </p>
    </div>
`;
const regex5 = /<[^>]*>|<\/[^>]+>|<[^>]*$|^[^<]*>/gm;
let strWithoutTags = str5.replaceAll(regex5, "").trim();
console.log(strWithoutTags);
