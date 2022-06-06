const viewMain = (req, res) => {
    res.render('home', {
        page_name: 'home'
    })
}

const viewTables = (req, res) => {
    res.render('tables', {
        page_name: 'tables'
    })
}

const viewNotifications = (req, res) => {
    res.render('notifications', {
        page_name: 'notifications'
    })
}

const viewIcons = (req, res) => {
    res.render('icons', {
        page_name: 'icons'
    })
}

const viewProfile = (req, res) => {
    res.render('profile', {
        page_name: 'profile'
    })
}

const viewTypography = (req, res) => {
    res.render('typography', {
        page_name: 'typography'
    })
}

module.exports = {
    viewMain,
    viewTables,
    viewNotifications,
    viewIcons,
    viewProfile,
    viewTypography
}