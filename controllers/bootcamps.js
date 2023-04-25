// @desc Get all Bootcamps
// @route GET /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) =>{
    res.status(200).json({ success: true, msg: 'show all bootcamps' });
}


// @desc Get single Bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public

exports.getBootcamp = (req, res, next) =>{
    res.status(200).json({ success: true, msg: `get Bootcamp ${req.params.id}` });
}


// @desc Get new Bootcamp
// @route Post /api/v1/bootcamps
// @access Private

exports.createBootcamp = (req, res, next) =>{
    res.status(200).json({ success: true, msg: 'create new bootcamp' });
}

// @desc update Bootcamp
// @route PUT /api/v1/bootcamps/:id
// @access Private

exports.updateBootcamp = (req, res, next) =>{
    res.status(200).json({ success: true, msg: `Update Bootcamp ${req.params.id}` });
}

// @desc Delete Bootcamp
// @route Delete /api/v1/bootcamps/:id
// @access Private

exports.deleteBootcamp = (req, res, next) =>{
    res.status(200).json({ success: true, msg: `delete Bootcamp ${req.params.id}` });
}