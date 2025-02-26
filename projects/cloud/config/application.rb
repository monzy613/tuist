# frozen_string_literal: true

require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module TuistCloud
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults(6.1)
    config.defaults = config_for(:defaults)

    # URLs
    Rails.application.routes.default_url_options[:host] = config.defaults[:urls][:app]
    config.action_controller.default_url_options = { host: config.defaults[:urls][:app] }
    config.action_mailer.default_url_options = { host: config.defaults[:urls][:app] }

    # Stripe
    config.stripe.secret_key = Rails.application.credentials.stripe[:api_key]
    config.stripe.publishable_key = Rails.application.credentials.stripe[:publishable_key]
  end
end
