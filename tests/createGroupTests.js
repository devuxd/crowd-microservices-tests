

var express = require('express'); // (npm install --save express)
var axios = require('axios');
var assert = require('assert');



describe('test /endpoints/createGroup', function () {


    it('illegal argument', async function() {
        const result = await axios.get('http://localhost:3001/endpoints/createGroup?todoArray=');
        assert.equal(result.data[0].id,'null');
        const result2 = await axios.get('http://localhost:3001/endpoints/createGroup?groupId=');
        assert.equal(result2.data[0].id,'null');

    });

    it('sets a label (groupId) for an array of todos', async function() {

        const arryOfTodo= [{
            id: '2',
                title: 'testAddTodo',
                userId: 'eaghayi',
                dueDate:'09-23-2018',
                status: 2,
                groupId: 'school3',
                createdTime: '12:39',
                createdDate: '06-13-2018',
                priority: 1,
                address: ' ',
                repeat: ' '
        },{
            id: '3',
            title: 'testAddTodo',
            userId: 'eaghayi',
            dueDate:'09-23-2018',
            status: 2,
            groupId: 'school2',
            createdTime: '12:39',
            createdDate: '06-13-2018',
            priority: 1,
            address: ' ',
            repeat: ' '
        }];
        const result = await axios.get('http://localhost:3001/endpoints/createGroup', {params:{ todoArray:arryOfTodo, groupId:'school'}});
        // const result = await axios.get('http://localhost:3001/endpoints/getAllTodoOfaGroup?userId=eaghayi');
        assert.equal(result.data,true);



    });
    it('it returns false if it can not find the all todos items for creating the group', async function() {
        const arryOfTodo= [{
            id: '209',
            title: 'testAddTodo',
            userId: 'eaghayi',
            dueDate:'09-23-2018',
            status: 2,
            groupId: 'school3',
            createdTime: '12:39',
            createdDate: '06-13-2018',
            priority: 1,
            address: ' ',
            repeat: ' '
        },{
            id: '300',
            title: 'testAddTodo',
            userId: 'eaghayi',
            dueDate:'09-23-2018',
            status: 2,
            groupId: 'school2',
            createdTime: '12:39',
            createdDate: '06-13-2018',
            priority: 1,
            address: ' ',
            repeat: ' '
        }];
        const result = await axios.get('http://localhost:3001/endpoints/createGroup', {params:{ todoArray:arryOfTodo, groupId:'school'}});
        assert.equal(result.data,false);


    });

   // the groupId already existed in the other todos

    it('the groupId already existed in the other todos', async function() {

        const arryOfTodo= [{
            id: '2',
            title: 'testAddTodo',
            userId: 'eaghayi',
            dueDate:'09-23-2018',
            status: 2,
            groupId: 'school3',
            createdTime: '12:39',
            createdDate: '06-13-2018',
            priority: 1,
            address: ' ',
            repeat: ' '
        },{
            id: '3',
            title: 'testAddTodo',
            userId: 'eaghayi',
            dueDate:'09-23-2018',
            status: 2,
            groupId: 'school2',
            createdTime: '12:39',
            createdDate: '06-13-2018',
            priority: 1,
            address: ' ',
            repeat: ' '
        }];
        const result = await axios.get('http://localhost:3001/endpoints/createGroup', {params:{ todoArray:arryOfTodo, groupId:'school'}});
        // const result = await axios.get('http://localhost:3001/endpoints/getAllTodoOfaGroup?userId=eaghayi');
        assert.equal(result.data,true);



    });
});