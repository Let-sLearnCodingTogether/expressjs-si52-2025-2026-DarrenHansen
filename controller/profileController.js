export const publicProfile = (req, res) => {
    const username = req.params.username
    const dataForView = {
        title: `Profile  ${username}`,
        username: username,
        bio: "Bio dari controller"
    }
    res.render('public-profile', dataForView);
}

export const privateProfile = async (req, res) => {
    try {
        res.status(200).json({
            message:"Private profil berhasil diakses",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};