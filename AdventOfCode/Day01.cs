using System.Text.RegularExpressions;

namespace AdventOfCode;

public class Day01 : BaseDay
{
    private readonly string _input;
    private readonly Dictionary<string, string> mapping;

    public Day01()
    {
        _input = File.ReadAllText(InputFilePath);
        mapping = new Dictionary<string, string>()
        {
            { "1", "1"},
            { "2", "2"},
            { "3", "3"},
            { "4", "4"},
            { "5", "5"},
            { "6", "6"},
            { "7", "7"},
            { "8", "8"},
            { "9", "9"},
            { "one", "1"},
            { "two", "2"},
            { "three", "3"},
            { "four", "4"},
            { "five", "5"},
            { "six", "6"},
            { "seven", "7"},
            { "eight", "8"},
            { "nine", "9" }
        };
    }

    public override ValueTask<string> Solve_1()
    {
        var lines = _input.Split(Environment.NewLine);
        string pattern = @"(?=(one|two|three|four|five|six|seven|eight|nine|\d))";
        var regEx = new Regex(pattern, RegexOptions.Compiled);
        var answer = 0;

        foreach (var line in lines)
        {
            var matches = regEx.Match(line);
            if (matches.Success)
            {
                var first = matches.Groups[0].Value;
                var last = matches.Groups[matches.Groups.Count - 1].Value;
                answer += int.Parse(mapping[first] + mapping[last]);

            }
        }

        return new($"{answer}");
    }

    public override ValueTask<string> Solve_2() => new($"Solution to {ClassPrefix} {CalculateIndex()}, part 2");
}
