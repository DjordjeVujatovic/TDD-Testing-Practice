describe('rojoSays', () => {
  let test;

  describe('when sentense starts with word hello', () => {
    beforeEach(() => {
      test = {};
      test.subject = require('../lib/rojo-says').listen;
    });

    it('should return a string containing "hello"', () => {
      const helloRegex = /hello.*/i;
      const testString = 'Hello there!'
      const result = helloRegex.test(test.subject(testString));
      expect(result).toBe(true);
    });
    describe('.listen', () => {
      describe('when passed string that starts with "when"', () => {
        it('should return a string containing am or pm', () => {
          const timeRegex = /.+am|pm.*/i;
          const testString = 'When are you coming home?';
          const result = timeRegex.test(test.subject(testString));
          expect(result).toBe(true);
        });
      });
    });
    describe('when passed a string that starts with "what"', () => {
      describe('when the string contains "time"', () => {
        it('should return a string containing am or pm', () => {
          const timeRegex = /.+am|pm.*/i;
          const testString = 'What time are you coming home?';
          const result = timeRegex.test(test.subject(testString));
          expect(result).toBe(true);
        });
      });
    });
    describe('when the string does not contain "time"', () => {
      describe('when the string also contains "day"', () => {
        it('should return a string containing a day of the week', () => {
          const dayRegex = /.*monday|tuesday|wednesday|thursday|friday|saturday|sunday.*/i;
          const testString = 'What day are you coming home?';
          const result = dayRegex.test(test.subject(testString));
          expect(result).toBe(true);
        });
      });
    });
    describe('when the string that starts with "how"', () => {
      describe('when the string also contains "you"', () => {
        it('should return a string containing a feeling', () => {
          const feelingRegex = /.*good|bad|shitty|great|terrible|bipolar|sexy.*/i;
          const testString = 'How are you feeling?';
          const result = feelingRegex.test(test.subject(testString));
          expect(result).toBe(true);
        });
      });
    });
    describe('when the string that starts with "which"', () => {
      describe('when the string also contains "province"', () => {
        describe('when the string also contains "you"', () => {
          describe('when the string also contains "from"', () => {
            it('should return a string containing province', () => {
              const provinceRegex = /.*BC|ontario|quebec|alberta|manitoba|PEI|Saskatchewan|NS.*/i;
              const testString = 'Which province are you from?';
              const result = provinceRegex.test(test.subject(testString));
              expect(result).toBe(true);
            });
          });
        });
      })
    });
    describe('when the string contains "what"', () => {
      describe('when the string contains the word "your"', () => {
        describe('and also contains the word "name"', () => {
          it('should return Rojo', () => {
            const nameRegex = /.*rojo.*/i;
            const testString = 'what is your name ?';
            const result = nameRegex.test(test.subject(testString));
            expect(result).toBe(true);
          });
        });
      });
    });
    describe('when the string contains "what"', () => {
      describe('when the string also contains "your"', () => {
        describe('and also contains "nationality"', () => {
          it('should return Spanish', () => {
            const nationalityRegex = /spanish.*/i;
            const testString = 'what is your nationality?';
            const result = nationalityRegex.test(test.subject(testString));
            expect(result).toBe(true);
          });
        });
      });
    });
    describe('when the string contains "what"', () => {
      describe('when the string contains "favourite"', () => {
        describe('when the string also contains "color"', () => {
          it('should return color', () => {
            const colorRegex = /.*yellow|blue|red|white|black|purple|green.*/;
            const testString = 'what is your favourite color?';
            const result = colorRegex.test(test.subject(testString));
            expect(result).toBe(true);
          });
        });
        describe('when the string also contains "month"', () => {
          it('should return janurary', () => {
            const monthRegex = /.*janurary|february|march|april|may|june|july|august|september|october|november|december.*/;
            const testString ='what is your favourite month';
            const result = monthRegex.test(test.subject(testString));
            expect(result).toBe(true);
          });
        });
        describe('when the string also contains "season"', () => {
          it('should return a season', () => {
            const seasonRegex = /.*wither|spring|summer|fall.*/;
            const testString = 'what is your favourite season?'
            const result = seasonRegex.test(test.subject(testString));
            expect(result).toBe(true);
          } )
        })
      });
    })
  });
});
