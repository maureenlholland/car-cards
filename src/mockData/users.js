/* Users
has many projects
has many notes
has many cars
*/ 
export default [
    {
        id: 'user-test',
        name: 'Test',
        projects: ['id1', 'id2']
    },
    {
        id: 'other-user-test',
        name: 'Other Test',
        projects: ['id1']
    }
]