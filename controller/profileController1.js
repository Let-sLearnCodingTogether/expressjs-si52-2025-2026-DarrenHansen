export const profiletest = (req, res) => {
    const username = req.params.username
    res.render('profiletest', {
        title: username,
        username: username,
        bio: "Aku raja iblis"
    });
}