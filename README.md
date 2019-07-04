# bam-shopping
A fake shopping program to help me practice mysql

## Getting Started
To get started with this you need some way to make a local sql database such as mysql workbench. Run the code from the schema file in the SQL folder to create the database.

![image of me running the schema](/images/schema.png)

Then you need to run the seeds folder so that you have some fake items to work with

![image of me running the seeds](/images/seeds.png)

then in your command line you need to navigate to you must type `npm install` then the program should be ready to go.

## Usage

The program itself is pretty easy to use when you first open it it will prompt you with a message to select an item. You should use the item ID that is in the second column of the table

![the list of items and first prompt](/images/list.png)

after you type in the number and press enter you will get a prompt that asks how much you want

![the selection made and second prompt shown](/images/productnumber.png)

## Packages Used
   * Inquirer
   * mysql

## Author
Daniel Rogalsky