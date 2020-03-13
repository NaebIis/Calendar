const INIT_STATE = {
  fetching: false,
  fetched: false,
  error: null,
  notes: [],
  clickedDayNotes: "",
  clickedDayNoteId: ''
};

const ClickedDayNotes = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CLICKED_DAY_NOTES_PENDING": {
      return {
        ...state,
        fetching: true
      };
    }
    case "CLICKED_DAY_NOTES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        notes: action.payload
      };
    }
    case "CLICKED_DAY_NOTES_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case "UPDATE_CLICKED_DAY_NOTES": {
      const updatedClickedDayNotes = [];
      state.notes.forEach(clickedDayNote => {
        if (clickedDayNote.id === action.payload.id) {
          clickedDayNote.notes = action.payload.notes;
          updatedClickedDayNotes.push(clickedDayNote);
        } else {
          updatedClickedDayNotes.push(clickedDayNote);
        }
      });
      return { ...state, notes: updatedClickedDayNotes };
    }
    case "UPDATE_CLICKED_DATE_NOTES_AFTER_DELETE": {
      let temp = []
      state.notes.forEach(note => {
        if (note.id !== action.payload.id) {
          temp.push(note)
        }
      })
      return { ...state, notes: temp }
    }
    case "POST_CLICKED_DAY_NOTES": {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    case "NEW_CLICKED_DAY_NOTE": {
      return { ...state, clickedDayNotes: action.payload };
    }
    case "NEW_CLICKED_DAY_NOTE_ID": {
      return { ...state, clickedDayNoteId: action.payload };
    }
    default:
      return state;
  }
};

export default ClickedDayNotes;

