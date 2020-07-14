package webhook

import (
	"fmt"
	"net/http"
	"net/url"
	"sync"
)

// Config provides configuration for an Webhook deliverer.
type Config struct {
	sync.Mutex
	// the URL where our webhook will be delivered
	Target string `yaml:"target"`
	target *url.URL
	// the callback url where notifications can be received
	// the notification will be appended to this url
	Callback string `yaml:"callback"`
	callback *url.URL
	// any htp headers necessary for the request to Target
	Headers http.Header `yaml:"headers"`
}

// Validate confirms configuration is valid and fills in private members
// with parsed values on success.
func (c *Config) Validate() error {
	target, err := url.Parse(c.Target)
	if err != nil {
		return fmt.Errorf("failed to parse target url")
	}
	c.target = target

	c.Lock()
	callback, err := url.Parse(c.Callback)
	if err != nil {
		return fmt.Errorf("failed to parse callback url")
	}
	c.callback = callback
	c.Unlock()
	return nil
}
