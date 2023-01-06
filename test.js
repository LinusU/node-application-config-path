/* eslint-env mocha */

import path from 'node:path'
import assert from 'node:assert'

import applicationConfigPath from './index.js'

describe('application-config-path', function () {
  it('should return an absolute path', function () {
    assert.ok(path.isAbsolute(applicationConfigPath('test')))
  })

  it('should throw error when called incorrectly', function () {
    assert.throws(function () {
      applicationConfigPath()
    }, TypeError)

    assert.throws(function () {
      applicationConfigPath(1)
    }, TypeError)

    assert.throws(function () {
      applicationConfigPath({})
    }, TypeError)
  })
})
