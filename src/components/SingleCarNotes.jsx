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
        <Card>
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

export default function SingleCarNotes({ saveNote }) {
    const [notes, updateNotes] = useState([])
    const [editNoteId, setEditNoteId] = useState(null);
    const [note, setNote] = useState('');
    const [addNote, setAddNote] = useState(false);

    // on mount, add existing notes to state
    // on save, save note to db, replace existing notes state with db response, if addNote is true, set to false

    return (
        <Pane className="single-car__notes">
            {notes.map((note) => carNote(note, setNote, editNoteId, setEditNoteId))}
            {addNote ? (
                <>
                    <CarFormNote note={note} handleChange={setNote} />
                    <Button appearance="primary" type="button" onClick={updateNotes}>Save Note</Button>
                </>
            ) : <Button appearance="primary" type="button" onClick={() => setAddNote(true)}>Add Note</Button>}
        </Pane>
    )
}