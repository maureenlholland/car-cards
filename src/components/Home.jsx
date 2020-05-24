import React, { useState } from 'react';
import { Link as NavLink } from "react-router-dom";
import {
  Card,
  Pane,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  TextInputField,
} from 'evergreen-ui';
import mockDecks from '../mockData/decks';

function DeckCard({ deck }) {
    return (
      <ListItem className="deck__single">
        <Card elevation={2} padding="20px" background="white">
          <Heading is="h2">{deck.label}</Heading>
          <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to={`/${deck.id}`}>
            <Button marginTop="20px"  iconAfter="arrow-right">See deck</Button>
          </NavLink>
        </Card>
      </ListItem>
    );
  }

export default function Home() {
    // On mount, call api for decks belonging to this user
    // const decks = [] 
    const decks = mockDecks;
    const hasDecks = decks.length > 0;
    const [deck, setDeck] = useState('');

    const addNewDeck = (e) => {
        if (!deck) {
            return alert('Deck must have a name')
        }
        // add checked attribute
        // api call to update decks, reset new deck field 
        console.log(deck)
        setDeck('')
    }

    return (
        <Pane className="home">
          <Pane
            maxWidth="500px"
            marginLeft="auto"
            marginRight="auto"
            marginTop="0"
            marginBottom="0"
            paddingBottom="20px"
          >
            <TextInputField
                  label="Name"
                  name="deck"
                  placeholder="Country truck"
                  value={deck}
                  onChange={(e) => setDeck(e.target.value)}
                  marginBottom="10px"
              />
              <Button type="button" onClick={addNewDeck}>Add New Deck</Button>
            </Pane>
            {hasDecks && (
                <UnorderedList>
                    {decks.map((deck) => <DeckCard key={deck.id} deck={deck}/>)}
                </UnorderedList>
            )}
        </Pane>
    );
}
