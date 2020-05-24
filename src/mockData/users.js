/* Users
has many Decks
has many Cars through Decks
has many Notes
*/ 
export default [
    {
        id: 'user-test',
        name: 'Test',
        decks: ['deck-1', 'deck-2']
    },
    {
        id: 'other-user-test',
        name: 'Other Test',
        decks: ['deck-1']
    }
]