activate :automatic_image_sizes
activate :directory_indexes

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

# silence i18n warning
::I18n.config.enforce_available_locales = false

# LiveReload
activate :livereload

# Google Analytics
activate :google_analytics do |ga|
  ga.tracking_id = 'UA-37634759-2'
end
