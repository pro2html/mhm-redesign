require_relative 'copy_file'

set_variables(to_mhmr: ARGV.first == 'to_mhmr')

# copy scss files
{
  'components' => %w[
    _info-tooltip.scss
    _intro-actions.scss
    _intro-info-nav.scss
    _intro-section.scss
    _intro-user-info.scss
    _item-counter.scss
    _lang-select.scss
    _nav.scss
    _popups.scss
    _search.scss
    _transitions-menu.scss
    _user-actions.scss
    _user-popup.scss
    _user-settings.scss
  ],
  'global' => %w[
    _page-grid.scss
  ],
  'global/base' => %w[
    _helpers.scss
    _mixins.scss
    _mq.scss
    _variables.scss
  ],
  'global/base-elements' => %w[
    _buttons.scss
  ]
}.each do |folder, files|
  files.each { |file| copy_scss_file(folder, file) }
  test_mhmr_for_untracked_scss_files(folder, files)
end

# copy js files
{
  '' => %w[
    application-menu.js
    search.js
    popups.js
  ]
}.each do |folder, files|
  files.each { |file| copy_js_file(folder, file) }
  test_mhmr_for_untracked_js_files(folder, files)
end


