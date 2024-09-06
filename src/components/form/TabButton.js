

function TabButton({nomeAba, abaAtiva, alteraAba}){
    return(
        <button
              className={abaAtiva === nomeAba ? 'active' : ''}
              onClick={() => alteraAba(nomeAba)}
            >
              {nomeAba}
        
            </button>

    )
}

export default TabButton