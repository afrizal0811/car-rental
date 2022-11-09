export function Storeuser(tokendetails) {
    localStorage.setItem('userDetails', 
        tokendetails
    );
}

export function Inuser(user) {
    localStorage.setItem('userIn', 
        user
    );
}

