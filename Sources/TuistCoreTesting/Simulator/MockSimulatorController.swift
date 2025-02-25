import Foundation
import RxSwift
import TSCBasic
import struct TSCUtility.Version
import TuistGraph
import TuistSupport
@testable import TuistCore
@testable import TuistSupportTesting

public final class MockSimulatorController: SimulatorControlling {
    public init() {}

    public var devicesStub: Result<[SimulatorDevice], Error>?
    public func devices() -> Single<[SimulatorDevice]> {
        if let devicesStub = devicesStub {
            switch devicesStub {
            case let .failure(error): return .error(error)
            case let .success(devices): return .just(devices)
            }
        } else {
            return .error(TestError("call to non-stubbed method devices"))
        }
    }

    public var runtimesStub: Result<[SimulatorRuntime], Error>?
    public func runtimes() -> Single<[SimulatorRuntime]> {
        if let runtimesStub = runtimesStub {
            switch runtimesStub {
            case let .failure(error): return .error(error)
            case let .success(runtimes): return .just(runtimes)
            }
        } else {
            return .error(TestError("call to non-stubbed method runtimes"))
        }
    }

    public var devicesAndRuntimesStub: Result<[SimulatorDeviceAndRuntime], Error>?
    public func devicesAndRuntimes() -> Single<[SimulatorDeviceAndRuntime]> {
        if let devicesAndRuntimesStub = devicesAndRuntimesStub {
            switch devicesAndRuntimesStub {
            case let .failure(error): return .error(error)
            case let .success(runtimesAndDevices): return .just(runtimesAndDevices)
            }
        } else {
            return .error(TestError("call to non-stubbed method runtimesAndDevices"))
        }
    }

    public func findAvailableDevice(platform: Platform) -> Single<SimulatorDeviceAndRuntime> {
        self.findAvailableDevice(
            platform: platform,
            version: nil,
            minVersion: nil,
            deviceName: nil
        )
    }

    public var findAvailableDeviceStub: ((Platform, Version?, Version?, String?) -> Single<SimulatorDeviceAndRuntime>)?
    public func findAvailableDevice(
        platform: Platform,
        version: Version?,
        minVersion: Version?,
        deviceName: String?
    ) -> Single<SimulatorDeviceAndRuntime> {
        findAvailableDeviceStub?(platform, version, minVersion, deviceName) ?? .just(SimulatorDeviceAndRuntime.test())
    }

    public var installAppStub: ((AbsolutePath, SimulatorDevice) throws -> Void)?
    public func installApp(at path: AbsolutePath, device: SimulatorDevice) throws {
        try installAppStub?(path, device)
    }

    public var launchAppStub: ((String, SimulatorDevice, [String]) throws -> Void)?
    public func launchApp(bundleId: String, device: SimulatorDevice, arguments: [String]) throws {
        try launchAppStub?(bundleId, device, arguments)
    }

    public var destinationStub: ((Platform) -> Single<String>)?
    public func destination(for targetPlatform: Platform, version _: Version?, deviceName _: String?) -> Single<String> {
        destinationStub?(targetPlatform) ?? .just("id=\(SimulatorDeviceAndRuntime.test().device.udid)")
    }
}
