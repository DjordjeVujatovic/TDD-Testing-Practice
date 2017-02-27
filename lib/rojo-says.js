const listen = (text) => {
    const startsWithHello = /hello.*/i;
    const containsWhen = /when.*/i;
    const containsWhat = /what.*/i;
    const containsWhich = /which.*/i;
    const containsDay = /.+day.*/i;
    const containsTime = /.+time.*/i;
    const containsYou = /.+you.*/;
    const containsHow = /how.*/i;
    const containsFeeling = /feeling.*/i;
    const containsProvince = /.+province.*/i;
    const containsFrom = /.+from.*/i;
    const containsPhone = /.+phone.*/i;
    const containsNumber = /.+number.*/i;
    const containsYour = /.+your.*/i;
    const containsName = /.*name.*/i;
    const containsNationality = /.*nationality.*/i;
    const containsFavourite = /.+favourite.*/i;
    const containsColor = /.+color.*/i;
    const containsMonth = /.+month.*/i;
    const containsSeason = /.+season.*/i;

    if (startsWithHello.test(text)) {
        return 'hello there'
    }
    if (containsWhen.test(text)) {
        return '4:30pm'
    }
    if (containsWhat.test(text)) {
        if (containsTime.test(text)) {
            return '4:30am'
        }
        if (containsYour.test(text)) {
            if (containsName.test(text)) {
                return 'rojo'
            }
            if (containsNationality.test(text)) {
                return 'Spanish Amigo'
            }
            if (containsFavourite.test(text)) {
                if (containsColor.test(text)) {
                    return 'blue'
                }
                if (containsMonth.test(text)){
                    return 'march'
                }
                if (containsSeason.test(text)){
                    return 'fall'
                }
            }
        } else {
            return 'tuesday'
        }
    }
    if (containsHow.test(text)) {
        if (containsYou.test(text)) {
            if (containsFeeling.test(text)) {
                return 'sexy'
            }
        }
    }
    if (containsWhich.test(text)) {
        if (containsProvince.test(text)) {
            if (containsYou.test(text)) {
                if (containsFrom.test(text)) {
                    return 'bc'
                }
            }
        }
    }
}
module.exports = { listen };
