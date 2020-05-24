import React from 'react';
import { Link as NavLink } from "react-router-dom";
import {
  Card,
  Pane,
  Heading,
  UnorderedList,
  ListItem,
  Button,
  Paragraph,
} from 'evergreen-ui';
import decks from '../mockData/decks';

function DeckCard({ deck }) {
    return (
      <ListItem className="car-cards__single">
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
    // Redirect to login if user not identified
    // Show add new deck button if user has no decks (like attribute, just a label field)
    // Show list of decks if user has decks

    // on mount, api call to get decks by user
    const deck = decks[0];
    return (
        <Pane className={`deck deck--${deck.id}`}>
            {decks.length === 0 ? <Paragraph>No decks yet!</Paragraph> : (
                <UnorderedList>
                    {decks.map((d) => <DeckCard key={d.id} deck={d}/>)}
                </UnorderedList>
            )}
        </Pane>
    );
}
