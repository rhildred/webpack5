import webpack from 'webpack';
import config from '../webpack.config.js';

describe("test webpack", function() {
    it("should work with node 18", function() {
        webpack(config, (err, stats) =>
        {
            expect(err).toBe(null);
            expect(stats.hasErrors()).toBe(false);
        })
    });
  });
      
  
  


