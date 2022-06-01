const productStyle = {
  MainBox: { marginLeft: '5px', marginTop: '7px', width: '200px' },
  Card: { maxWidth: 205, maxHeight: 230 },
  DiscoundBlock: { position: 'absolute', top: '115px' },
  DiscoundBtn: {
    background: '#D23F57',
    marginLeft: '5px',
    border: 'none',
    color: 'white',
    fontSize: '10px',
    borderRadius: '10px'
  },
  RatingBlock: { display: 'flex', flexDirection: 'row' },
  HeartBlock: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'center'
  },
  PriceBlock: {
    display: 'flex',
    color: '#D23F57',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  PriceText: {
    flexGrow: 2,
    fontSize: '12px',
    textDecoration: 'line-through',
    color: 'gray'
  },
  PriceDiscText: { flexGrow: 2, fontSize: '12px' },
  CardBtn: {
    padding: '0px',
    minWidth: '10px',
    height: '20px',
    color: '#D23F57',
    border: '1px solid #D23F57',
    borderRadius: '3px'
  },
  QuantityText: { fontSize: '12px', flexGrow: 5, textAlign: 'center' },
  CardIcon : { height: '15px' }
}
export default productStyle; 