import * as sass_ from 'sass';
import gulpSass from 'gulp-sass';
import groupCssMediaQueries from 'gulp-group-css-media-queries';


const sass = gulpSass(sass_);

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev})
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: "SCSS",
      message: "Error: <%= error.message %>"
    }))
    )
  .pipe(sass({
    optputStyle: 'expanded'
  }))
  .pipe(groupCssMediaQueries())
  .pipe(app.gulp.dest(app.path.build.css))
  .pipe(app.plugins.browsersync.stream());
}