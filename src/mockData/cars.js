import notes from './notes';
import attributes from './attributes';

/* Cars
belongs to one Deck
has many Attributes
has many Notes (dependent, destroy)
*/ 
export default [{
    id: 'mazda',
    make: 'mazda',
    model: 'CX 5',
    year: '2020',
    highPrice: '40,000',
    lowPrice: '25,000',
    link: 'www.mazda.ca',
    created_at: 'date',
    updated_at: 'date',
    attributes: [...attributes],
    notes: [...notes],
    deck_id: 'deck-1'
}]
