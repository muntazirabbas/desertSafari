const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mustacheExprees = require('mustache-express');

const indexRouter = require('./routes/generic/index');
const notFoundRouter = require('./routes/generic/404');
const packageRouter = require('./routes/generic/all-package');
const toursRouter = require('./routes/generic/tours');
const toursDetailRouter = require('./routes/generic/tourdetail');
const blogRouter = require('./routes/generic/blog');
const blogDetailRouter = require('./routes/generic/blogdetail');
const aboutRouter = require('./routes/generic/about');
const contactRouter = require('./routes/generic/contact');
const siteMapRouter = require('./routes/generic/siteMap');

const userLoginRouter = require('./routes/generic/userLogin');
const userProfileRouter = require('./routes/generic/userProfile');
const userDashboardRouter = require('./routes/generic/userDashboard');
const travelBookingRouter = require('./routes/generic/travelBooking');
const travelDetailRouter = require('./routes/generic/travelDetail');


//adminRouting
const addBlogRouter = require('./routes/admin/addBlog');
const addPackageRouter = require('./routes/admin/addPackage');
const addPackageCategoryRouter = require('./routes/admin/addPackageCategory');
const addSightSeeingRouter = require('./routes/admin/addSightSeeing');
const allBlogsRouter = require('./routes/admin/allBlogs');
const allPackageBookingsRouter = require('./routes/admin/allPackageBookings');
const allPackageCategoriesRouter = require('./routes/admin/allPackageCategories');
const allUsersRouter = require('./routes/admin/allUsers');
const dashboardRouter = require('./routes/admin/index');
const loginRouter = require('./routes/admin/login');
const forgetRouter = require('./routes/admin/forgot');
const sightSeeBookingsRouter = require('./routes/admin/sightSeeBookings');
const sightSeeingRouter = require('./routes/admin/sightSeeing');
const socialMediaRouter = require('./routes/admin/socialMedia');
const tourPackagesRouter = require('./routes/admin/tourPackages');


const app = express();

// view engine setup
app.engine('mustache', mustacheExprees());
app.set('views', __dirname + '/views');


// app.set('views', );
app.set('view engine', 'mustache');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// setting routes
app.use('/', indexRouter);
app.use('/404', indexRouter);
app.use('/main', indexRouter); //index router
app.use('/all-package', packageRouter);
app.use('/tours', toursRouter);
app.use('/tour-details', toursDetailRouter);
app.use('/blog', blogRouter);
app.use('/blog-inner', blogDetailRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/siteMap', siteMapRouter);
app.use('/login', userLoginRouter);
app.use('/profile', userProfileRouter);
app.use('/dashboard', userDashboardRouter);
app.use('/travelBooking', travelBookingRouter);
app.use('/travelDetail', travelDetailRouter);


// admin routes

app.use('/admin', dashboardRouter);
app.use('/admin/blog-add', addBlogRouter);
app.use('/admin/package-add', addPackageRouter);
app.use('/admin/package-cat-add', addPackageCategoryRouter);
app.use('/admin/sight-see-add', addSightSeeingRouter);
app.use('/admin/user-all', allUsersRouter);
app.use('/admin/index', dashboardRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/forgot', forgetRouter);
app.use('/admin/social-media', socialMediaRouter);
app.use('/admin/package-all', tourPackagesRouter);
app.use('/admin/blog-all', allBlogsRouter);
app.use('/admin/package-cat-all', allPackageCategoriesRouter);
app.use('/admin/package-booking-all', allPackageBookingsRouter);
app.use('/admin/sight-see-add', sightSeeBookingsRouter);
app.use('/admin/sight-see-all', sightSeeingRouter);

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
  // res.render('error');
  res.render('generic/index');
});
app.listen(3000, () => {
  console.log("listening on port 3000");
})

module.exports = app;
