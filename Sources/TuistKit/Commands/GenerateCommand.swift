import ArgumentParser
import Foundation

struct GenerateCommand: ParsableCommand {
    static var configuration: CommandConfiguration {
        CommandConfiguration(commandName: "generate",
                             abstract: "Generates an Xcode workspace to start working on the project.",
                             subcommands: [])
    }

    @Option(
        name: .shortAndLong,
        help: "The path to the directory that contains the definition of the project.",
        completion: .directory
    )
    var path: String?

    @Flag(
        name: [.customShort("P"), .long],
        help: "Only generate the local project (without generating its dependencies)."
    )
    var projectOnly: Bool = false

    @Flag(
        name: [.customShort("O"), .long],
        help: "Open the project after generating it."
    )
    var open: Bool = false

    func run() throws {
        try GenerateService().run(path: path,
                                  projectOnly: projectOnly,
                                  open: open)
    }
}
