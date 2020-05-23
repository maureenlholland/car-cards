import React, { useState } from 'react';
import {
    Pane,
    Card,
    Paragraph,
    IconButton,
    Button,
} from 'evergreen-ui';
import CarFormNote from './CarFormNote';

const carNote = ({ note, setNote, editNoteId, setEditNoteId }) => {
    return (
        <Card className="car-notes__single">
            {editNoteId === note.id ? (
                <CarFormNote note={note} handleChange={setNote} />
            ) : (
                <>
                <IconButton icon="edit" onClick={(e) => setEditNoteId(note.id)} />
                {/* are you sure popup, delete from db, update list */}
                <IconButton icon="trash" />
                <Paragraph>{note}</Paragraph>
                </>
            )}
        </Card>
    );
};

export default function CarNotes({ savedNotes, saveNote }) {
    const [notes, updateNotes] = useState([])
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
        <Pane className="car-notes">
            {(notes.length > 0 || addNote) ? (
                notes.map((note) => carNote(note, setNote, editNoteId, setEditNoteId))
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