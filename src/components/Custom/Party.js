import React from 'react';

export default function Party({game='DAI', character1, character2, character3}) {
  var partyCharacter1;
  var partyCharacter2;
  var partyCharacter3;
  var playerName;

  switch (game) {
    case 'DAI':
      playerName = 'Inquisitor'
      break;

    case 'DA2':
      playerName = 'Hawke'
      break;

    case 'DAO':
      playerName = 'Warden'
      break;
  
    default:
      playerName = '???'
      break;
  }

  var player = (
    <div className={'PartyCharacter'}>
          <img src={require('@site/static/img/' + {game}.game + '/portrait/player.png').default}></img>
          {playerName}
    </div>
  );

  if (character1 != null) {
    partyCharacter1 = (
      <div className={'PartyCharacter'}>
            <img src={require('@site/static/img/' + {game}.game + '/portrait/' + {character1}.character1 + '.png').default}></img>
            {character1}
      </div>
    );
  };

  if (character2 != null) {
    partyCharacter2 = (
      <div className={'PartyCharacter'}>
            <img src={require('@site/static/img/' + {game}.game + '/portrait/' + {character2}.character2 + '.png').default}></img>
            {character2}
      </div>
    );
  };

  if (character3 != null) {
    partyCharacter3 = (
      <div className={'PartyCharacter'}>
            <img src={require('@site/static/img/' + {game}.game + '/portrait/' + {character3}.character3 + '.png').default}></img>
            {character3}
      </div>
    );
  };
  

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem'}}>
      <div className={'party'}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', justifyContent: 'center', marginBottom: '0.5rem'}}>
          <div style={{fontSize: '1.3rem', fontWeight: 'bold', fontFamily: 'InquisitionSc'}}>Selected Party</div>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '0.5rem'}}>
          <div style={{display: 'flex', flex: '10%'}}/>
          <div style={{display: 'flex', flex: '60%', flexDirection: 'row', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap'}}>
          {player}
          {partyCharacter1}
          {partyCharacter2}
          {partyCharacter3}
          </div>
          <div style={{display: 'flex', flex: '10%'}}/>
        </div>
      </div>
    </div>
  );
}