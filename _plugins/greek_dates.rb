module Jekyll
module GreekDates
    MONTHS = {"01" => "Ιαν", "02" => "Φεβ", "03" => "Μαρ",
            "04" => "Απρ", "05" => "Μάϊ", "06" => "Ιουν",
            "07" => "Ιουλ", "08" => "Αυγ", "09" => "Σεπ",
            "10" => "Οκτ", "11" => "Νοε", "12" => "Δεκ"}

    # http://man7.org/linux/man-pages/man3/strftime.3.html
    def greek_date(date, format)
        day = time(date).strftime("%e") # leading zero is replaced by a space
        month = time(date).strftime("%m")
        year = time(date).strftime("%Y")
        string = format.sub("%d", day).sub("%b", MONTHS[month]).sub("%Y", year);
#         day+' '+MONTHS[month]+' '+year
        return string;
    end

    def html5date(date)
        day = time(date).strftime("%d")
        month = time(date).strftime("%m")
        year = time(date).strftime("%Y")
        year+'-'+month+'-'+day
    end
end
end

Liquid::Template.register_filter(Jekyll::GreekDates)
