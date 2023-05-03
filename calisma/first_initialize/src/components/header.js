function Header(){
    return(
        /* 
        Bir componentte return işlemi yaparken kapsayıcı bir element kullanılmalıdır. Bu kodda div kullanıldığı gibi.
        Ya da <>  </> sembolleride kullanılarak yazılabilir.
        */

        // <>
        //     <p>Merahaba ben Header bileşeni.</p>
        // </>

        <div> 
            <p>Merahaba ben Header bileşeni.</p>
        </div>
    )
}


export default Header;