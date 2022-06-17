# frozen_string_literal: true

require 'digest'
require 'fileutils'

def set_variables(to_mhmr:)
  redesign = '.'
  redesign_scss_folder = 'scss'
  redesign_js_folder = 'js'

  @mhmr = './../mhmr/app/assets'
  @mhmr_scss_folder = 'stylesheets'
  @mhmr_js_folder = 'javascripts/redesign'

  @from = to_mhmr ? redesign : @mhmr
  @from_scss_folder = to_mhmr ? redesign_scss_folder : @mhmr_scss_folder
  @from_js_folder = to_mhmr ? redesign_js_folder : @mhmr_js_folder

  @to = to_mhmr ? @mhmr : redesign
  @to_scss_folder = to_mhmr ? @mhmr_scss_folder : redesign_scss_folder
  @to_js_folder = to_mhmr ? @mhmr_js_folder : redesign_js_folder
end

def copy_file(subfolder, filename, from_subfolder, to_subfolder)
  copy_file = "#{@from}/#{from_subfolder}/#{subfolder}/#{filename}"

  raise("File does not exist: #{copy_file}") unless File.file?(copy_file)

  dest_folder = "#{@to}/#{to_subfolder}/#{subfolder}"
  dest_file = "#{dest_folder}/#{filename}"

  return if File.file?(dest_file) && Digest::MD5.file(dest_file) == Digest::MD5.file(copy_file)

  puts("i #{copy_file} -> #{dest_folder}")

  FileUtils.cp(copy_file, dest_folder)
end

def copy_scss_file(subfolder, filename)
  copy_file(subfolder, filename, @from_scss_folder, @to_scss_folder)
end

def copy_js_file(subfolder, filename)
  copy_file(subfolder, filename, @from_js_folder, @to_js_folder)
end

def files_in_folder(folder)
  Dir.glob("#{folder}/*").select { |file| File.file?(file) }.map { |file| file.split('/').last }
end

def test_mhmr_for_untracked_scss_files(folder, files)
  folder = "#{@mhmr}/#{@mhmr_scss_folder}/#{folder}"
  untracked_files = files_in_folder(folder) - files
  untracked_files.each do |file|
    puts("! untracked scss file in mhmr #{folder}/#{file}")
  end
end

def test_mhmr_for_untracked_js_files(folder, files)
  folder = "#{@mhmr}/#{@mhmr_js_folder}/#{folder}"
  untracked_files = files_in_folder(folder) - files
  untracked_files.delete('_redesign-imports.js')
  untracked_files.each do |file|
    puts("! untracked js file in mhmr #{folder}/#{file}")
  end
end
