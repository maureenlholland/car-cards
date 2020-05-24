/* Users
has many Decks
has many Cars through Decks
has many Notes
*/ 
export const users = [
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
];

export const usersWithAvatar = users.map((u) => {
    return { ...u, avatar: `https://placedog.net/150/150?id=${Math.ceil(Math.random() * 100)}`}
});