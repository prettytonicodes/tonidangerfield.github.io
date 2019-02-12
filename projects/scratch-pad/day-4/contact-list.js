// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//Create factory function
//Function should return a contact object: 
//ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
//preface code with return
//create object literal with function parameters/arguments as keys/properties and value names without quotes or strings

function makeContact(id, nameFirst, nameLast) {
    return {id: id, 
    nameFirst: nameFirst, 
    nameLast: nameLast
    };
}

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    //Assign variable contacts to an empty array to hold contacts from contact list later
    let contacts = []; 
    
    //preface code with return, as the function needs to return length, an added contact, found contact, and removed contact
    return {
        // we implemented the length api for you //
        //Contact list Object has an api called length, which is a function that will return the number of contacts, using property of length
        length: function() {
            return contacts.length;
        }, 
        //addContact is a function that will return any contact added to the list by pushing them into an array called contacts
        addContact: function(contact) {
            return contacts.push(contact);
        }, 
        //findContact is a function that takes the full name of each contact
        //I assigned fName to the string of fullName, which was made into an array via the split method to separate first and last names of contacts
        //I assigned nameFirst to fName at the index of 0, which would be a contact's first name
        //I assigned nameLast to fName at the index of 1, which would be a contact's last name
        //Next, I used a for loop to loop over the array of contacts, incrementing and starting at the first index
        //I then, used if-else conditional statement to compare the names inside of my contacts array to the fullName input of the findContact function
        //if contacts at the ith index at nameFirst(the element at the index of 0 of each array)...
        //+ a space (as first and last names are separated by a space)...
        //+ contacts at the ith index at nameLast(the element at the index of 1 of each array)...
        //is strictly equal to the function input of fullName...
        //return the contact at contacts at the ith index as the loop iterates through the contacts array
        //Else if the names do not match, return undefined
        
        findContact: function(fullName) {
            let fName = fullName.split(" ");
            let nameFirst = fName[0];
            let nameLast = fName[1];
            for(let i = 0; i < contacts.length; i++) {
                if(contacts[i].nameFirst + " " + contacts[i].nameLast === fullName) {
                    return contacts[i];
                } else {
                    return undefined;
                }
              
            }
        }, 
        //removeContact is a function that takes a contact and returns the contact removed from the list...
        //via the pop array method, which removes the last element of an array
        removeContact: function(contact) {
            return contacts.pop(contact);
            
        }, 
        //printAllContactNames is an ALL api that is a function that takes a contact and...
        //returns a String formated with all the full-names separated with a line-break
        //Assign fName(the contacts' full names) to an empty array
        //use a for loop to loop over the contacts array, iterating
        //use the push method to push the first and last name of contact at the ith index of contacts array, separated by a space to fName
        //return the names in fName joined and separated with a line-break ("\n")
        printAllContactNames: function(contact) {
            let fName = [];
            for(let i = 0; i < contacts.length; i++) {
                fName.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            } return fName.join("\n");
        }
        
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
