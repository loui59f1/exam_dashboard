import StorageBeer from "./StorageBeer.js";
import StorageTapBeer from "./StorageTapBeer.js";


export default function Storage({ storage, taps }) {

  let taps_sorted = [...taps];
  let storage_sorted = [...storage];

  taps_sorted.sort((a, b) => (a.level > b.level) ? 1 : -1)
  storage_sorted.sort((a, b) => (a.amount > b.amount) ? 1 : -1)

  const storageList = storage_sorted.map(beer => (<StorageBeer beer={beer} key={beer.name} />));
  const tapList = taps_sorted.map(tap => (<StorageTapBeer tap={tap} key={tap.id} />));

  return (
    <div className="storage">
      <div className="storagelist card">
        <div className="storage_list disable-scrollbars">
          <h1>Storage</h1>
          <div className="row">
            {storageList}
          </div>
        </div>
      </div>
      <div className="tablist card disable-scrollbars">
        <h1>Taps</h1>
        <div className="row">
          {tapList}
        </div>
      </div>
    </div>
  );
}
