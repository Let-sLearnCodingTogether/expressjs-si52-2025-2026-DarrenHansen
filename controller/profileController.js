export const publicProfile = (req, res) => {
    const username = req.params.username
    const dataForView = {
        title: `Profile  ${username}`,
        username: username,
        bio: "Bio dari controller"
    }
    res.render('public-profiles', dataForView);
}