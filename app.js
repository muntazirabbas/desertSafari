var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mustacheExprees = require('mustache-express');

var indexRouter = require('./routes/generic/index');
var packageRouter = require('./routes/generic/all-package');
var toursRouter = require('./routes/generic/tours');
var toursDetailRouter = require('./routes/generic/tourdetail');
var blogRouter = require('./routes/generic/blog');
var blogDetailRouter = require('./routes/generic/blogdetail');
var aboutRouter = require('./routes/generic/about');
var contactRouter = require('./routes/generic/contact');
var siteMapRouter = require('./routes/generic/siteMap');

// var userLoginRouter = require('./routes/generic/userLogin');
// var userProfileRouter = require('./routes/generic/userProfile');
// var userDashboardRouter = require('./routes/generic/userDashboard');
// var travelBookingRouter = require('./routes/generic/travelBooking');
// var travelDetailRouter = require('./routes/generic/travelDetail');

//adminRouting
var addBlogRouter = require('./routes/admin/addBlog');
var addPackageRouter = require('./routes/admin/addPackage');
var addPackageCategoryRouter = require('./routes/admin/addPackageCategory');
var addSightSeeingRouter = require('./routes/admin/addSightSeeing');
var allBlogsRouter = require('./routes/admin/allBlogs');
var allPackageBookingsRouter = require('./routes/admin/allPackageBookings');
var allPackageCategoriesRouter = require('./routes/admin/allPackageCategories');
var allUsersRouter = require('./routes/admin/allUsers');
var dashboardRouter = require('./routes/admin/dashboard');
var loginRouter = require('./routes/admin/login');
var sightSeeBookingsRouter = require('./routes/admin/sightSeeBookings');
var sightSeeingRouter = require('./routes/admin/sightSeeing');
var socialMediaRouter = require('./routes/admin/socialMedia');
var tourPackagesRouter = require('./routes/admin/tourPackages');



var app = express();

// view engine setup
app.engine('mustache', mustacheExprees());
app.set('views', path.join(__dirname, 'views/generic'));
app.set('views', path.join(__dirname, 'views/admin'));
app.set('view engine', 'mustache');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/allPackages', packageRouter);
app.use('/tours', toursRouter);
app.use('/tourDetail', toursDetailRouter);
app.use('/blog', blogRouter);
app.use('/blogDetail', blogDetailRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/sitemap', siteMapRouter);

// app.use('/userLogin', contactRouter);
// app.use('/userProfile', userProfileRouter);
// app.use('/userDashboard', userDashboardRouter);
// app.use('/travelBooking', travelBookingRouter);
// app.use('/travelDetail', travelDetailRouter);


//admin routes

app.use('/admin/addBlog', addBlogRouter);
app.use('/admin/addPackage', addPackageRouter);
app.use('/admin/addPackageCategory', addPackageCategoryRouter);
app.use('/admin/addSightSeeing', addSightSeeingRouter);
app.use('/admin/allUsers', allUsersRouter);
app.use('/admin/dashboard', dashboardRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/sightSeeBookings', sightSeeBookingsRouter);
app.use('/admin/sightSeeing', sightSeeingRouter);
app.use('/admin/socialMedia', socialMediaRouter);
app.use('/admin/tourPackages', tourPackagesRouter);
app.use('/admin/allBlogs', allBlogsRouter);
app.use('/admin/allPackageCategories', allPackageCategoriesRouter);
app.use('/admin/allPackageBookings', allPackageBookingsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
  // alert('page not found');
  // res.render('404page');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  // res.render('404page');
});
app.listen(3000, () => {
  console.log("listening on port 3000");
})

module.exports = app;
