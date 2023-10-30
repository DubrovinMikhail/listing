
export interface IProposal {
  listing_id: number;
  url: string;
  currency_code: string;
  price: string;
  quantity: number;
  title: string;
  MainImage: {
    url_570xN: string;
  };
};

type IProposalListProps = {
  items: IProposal[];
}

export const Listing = ({ items }:IProposalListProps) => {

  console.log(items)

  return (
    <div className="item-list">
      {items.map(item => (
        <div className="item" key={item.listing_id}>
          <div className="item-image">
            <a href={item.url}>
              {}
              <img src={item.MainImage.url_570xN} alt={item.title}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{item.title}</p>
            <p className="item-price">{item.currency_code}{item.price}</p>
            <p className="item-quantity level-medium">{item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
