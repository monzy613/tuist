import DOT
import Foundation
import GraphViz
import TSCBasic
import TuistGraph
import TuistPlugin
import TuistSupport
import XcodeProj
import XCTest

@testable import TuistCoreTesting
@testable import TuistKit
@testable import TuistLoaderTesting
@testable import TuistSupportTesting

final class GraphServiceTests: TuistUnitTestCase {
    var manifestGraphLoader: MockManifestGraphLoader!
    var graphVizMapper: MockGraphToGraphVizMapper!
    var subject: GraphService!

    override func setUp() {
        super.setUp()
        graphVizMapper = MockGraphToGraphVizMapper()
        manifestGraphLoader = MockManifestGraphLoader()

        subject = GraphService(
            graphVizGenerator: graphVizMapper,
            manifestGraphLoader: manifestGraphLoader
        )
    }

    override func tearDown() {
        graphVizMapper = nil
        manifestGraphLoader = nil
        subject = nil
        super.tearDown()
    }

    func test_run_whenDot() throws {
        // Given
        let temporaryPath = try self.temporaryPath()
        let graphPath = temporaryPath.appending(component: "graph.dot")
        let projectManifestPath = temporaryPath.appending(component: "Project.swift")

        try FileHandler.shared.touch(graphPath)
        try FileHandler.shared.touch(projectManifestPath)
        graphVizMapper.stubMap = Graph()

        // When
        try subject.run(
            format: .dot,
            layoutAlgorithm: .dot,
            skipTestTargets: false,
            skipExternalDependencies: false,
            targetsToFilter: [],
            path: temporaryPath,
            outputPath: temporaryPath
        )
        let got = try FileHandler.shared.readTextFile(graphPath)
        let expected = "graph { }"
        // Then
        XCTAssertEqual(got, expected)
        XCTAssertPrinterOutputContains("""
        Deleting existing graph at \(graphPath.pathString)
        Graph exported to \(graphPath.pathString)
        """)
    }

    func test_run_whenJson() throws {
        // Given
        let temporaryPath = try self.temporaryPath()
        let graphPath = temporaryPath.appending(component: "graph.json")
        let projectManifestPath = temporaryPath.appending(component: "Project.swift")

        try FileHandler.shared.touch(graphPath)
        try FileHandler.shared.touch(projectManifestPath)

        // When
        try subject.run(
            format: .json,
            layoutAlgorithm: .dot,
            skipTestTargets: false,
            skipExternalDependencies: false,
            targetsToFilter: [],
            path: temporaryPath,
            outputPath: temporaryPath
        )
        let got = try FileHandler.shared.readTextFile(graphPath)

        let result = try JSONDecoder().decode(GraphOutput.self, from: got.data(using: .utf8)!)
        // Then
        XCTAssertEqual(result, GraphOutput(name: "graph", path: "/", projects: [:]))
        XCTAssertPrinterOutputContains("""
        Deleting existing graph at \(graphPath.pathString)
        Graph exported to \(graphPath.pathString)
        """)
    }
}
