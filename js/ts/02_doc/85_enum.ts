enum Response1 {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response1): void {
    console.log(recipient, message)
}

respond("Princess Caroline", Response1.Yes)
