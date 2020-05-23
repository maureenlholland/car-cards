import React, { useState } from 'react';
import {
    Pane,
    Heading,
    Card,
    Paragraph,
    IconButton,
    Button,
    Avatar,
} from 'evergreen-ui';
import CarFormNote from './CarFormNote';
import users from '../mockData/users';

const CarNote = ({ note, setNote, editNoteId, setEditNoteId, user }) => {
    return (
        <Card className="car-notes__single">
            <Avatar
                src={`${user.avatar}`}
                name={user.name}
                size={150}
            />
            {editNoteId === note.id ? (
                <CarFormNote note={note} handleChange={setNote} />
            ) : (
                <>
                <Paragraph>{user.name}</Paragraph>
                <Paragraph>{note.content}</Paragraph>
                <IconButton icon="edit" onClick={(e) => setEditNoteId(note.id)} />
                {/* are you sure popup, delete from db, update list */}
                <IconButton icon="trash" />
                </>
            )}
        </Card>
    );
};

export default function CarNotes({ savedNotes, saveNote }) {
    const [notes, updateNotes] = useState([...savedNotes])
    const [editNoteId, setEditNoteId] = useState(null);
    const [note, setNote] = useState('');
    const [addNote, setAddNote] = useState(false);

    // on mount, set user avatars
    const usersWithAvatar = users.map((u) => {
        return { ...u, avatar: `https://placedog.net/150/150?id=${Math.ceil(Math.random() * 100)}`}
    })

    const handleSave = () => {
        console.log('add note to db')
        console.log(note);
        // on save, save note to db, replace existing notes state with db response, if addNote is true, set to false
        // updateNotes with db response, set addNote to false
    }

    return (
        <Pane className="car-notes">
            <Heading is="h3">User Notes: </Heading>
            {(notes.length > 0 || addNote) ? (
                notes.map((n) => (
                    <CarNote
                        key={n.id}
                        note={n}
                        setNote={setNote}
                        editNoteId={editNoteId}
                        setEditNoteId={setEditNoteId}
                        user={usersWithAvatar.find(u => u.id === n.user_id)}
                    />
                ))
            ) : (
                <Paragraph>You have no notes!</Paragraph>
            )}
            {addNote ? (
                <>
                    <CarFormNote note={note} handleChange={setNote} />
                    <Button appearance="primary" type="button" onClick={handleSave}>Save Note</Button>
                </>
            ) : <Button appearance="primary" type="button" onClick={() => setAddNote(true)}>Add Note</Button>}
        </Pane>
    )
}