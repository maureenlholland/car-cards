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
import CarFormNote from './form/CarFormNote';
import { usersWithAvatar as users } from '../../mockData/users';

const CarNote = ({ note, setNote, editNoteId, setEditNoteId, user }) => {
    // only show edit/delete buttons if note user_id is current logged in user
    return (
        <Card
            className="car-notes__single"
            marginTop="20px"
            marginBottom="20px"
            display="flex"
            elevation={3}
            padding="20px" 
        >
            <Avatar
                src={`${user.avatar}`}
                name={user.name}
                size={150}
            />
            {editNoteId === note.id ? (
                <CarFormNote note={note.content} handleChange={setNote} />
            ) : (
                <>
                <div style={{ marginLeft: '20px' }}>
                    <Paragraph size={500} marginBottom="10px">{user.name}:</Paragraph>
                    <Paragraph>{note.content}</Paragraph>
                </div>
                <div className="actions actions--note">
                    <IconButton icon="edit" onClick={(e) => setEditNoteId(note.id)} />
                    {/* are you sure popup, delete from db, update list */}
                    <IconButton icon="trash" />
                </div>
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

    const handleSave = () => {
        console.log('add note to db')
        console.log(note);
        // on save, save note to db, replace existing notes state with db response, if addNote is true, set to false
        // updateNotes with db response, set addNote to false
    }

    return (
        <Pane className="car-notes" marginTop="40px">
            <Heading is="h3" size={500}>User Notes: </Heading>
            {(notes.length > 0 || addNote) ? (
                notes.map((n) => (
                    <CarNote
                        key={n.id}
                        note={n}
                        setNote={setNote}
                        editNoteId={editNoteId}
                        setEditNoteId={setEditNoteId}
                        user={users.find(u => u.id === n.user_id)}
                    />
                ))
            ) : (
                <Paragraph>You have no notes!</Paragraph>
            )}
            {addNote ? (
                <>
                    <CarFormNote note={note} handleChange={setNote} />
                    <Button type="button" onClick={handleSave}>Save Note</Button>
                </>
            ) : <Button type="button" onClick={() => setAddNote(true)}>Add Note</Button>}
        </Pane>
    )
}